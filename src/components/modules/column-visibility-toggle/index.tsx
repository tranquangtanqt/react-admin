import React, { useEffect, useRef, useState } from 'react';

export type ColumnOption = {
  key: string;
  label: string;
};

export function useColumnVisibility(storageKey: string) {
  const [visible, setVisible] = useState<Record<string, boolean>>(() => {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return {};
    try {
      const parsed = JSON.parse(raw);
      return typeof parsed === 'object' && parsed ? parsed : {};
    } catch {
      return {};
    }
  });

  const handleChange = (next: Record<string, boolean>) => {
    setVisible(next);
    localStorage.setItem(storageKey, JSON.stringify(next));
  };

  const isVisible = (key: string) => visible[key] !== false;

  return { visible, onChange: handleChange, isVisible };
}

type Props = {
  columns: ColumnOption[];
  visible: Record<string, boolean>;
  onChange: (visible: Record<string, boolean>) => void;
};

export const ColumnVisibilityToggle: React.FC<Props> = ({
  columns,
  visible,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const handleToggleColumn = (key: string) => {
    const visibleCount = columns.filter((c) => visible[c.key] !== false).length;
    const isCurrentlyVisible = visible[key] !== false;
    if (isCurrentlyVisible && visibleCount <= 1) {
      return;
    }
    onChange({ ...visible, [key]: !isCurrentlyVisible });
  };

  return (
    <div className="position-relative d-inline-block" ref={containerRef}>
      <button
        type="button"
        className="btn btn-outline-secondary btn-sm"
        onClick={() => setOpen((prev) => !prev)}
      >
        Cột hiển thị
      </button>
      {open && (
        <div
          className="shadow-sm bg-body border rounded p-2"
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            zIndex: 1050,
            minWidth: 180,
            marginTop: 4,
          }}
        >
          {columns.map((column) => (
            <div className="form-check" key={column.key}>
              <input
                type="checkbox"
                className="form-check-input"
                id={`col-toggle-${column.key}`}
                checked={visible[column.key] !== false}
                onChange={() => handleToggleColumn(column.key)}
              />
              <label
                className="form-check-label"
                htmlFor={`col-toggle-${column.key}`}
              >
                {column.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
