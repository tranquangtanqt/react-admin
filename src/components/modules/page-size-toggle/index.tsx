import React, { useEffect, useRef, useState } from 'react';

type Props = {
  options: number[];
  value: number;
  onChange: (value: number) => void;
};

export const PageSizeToggle: React.FC<Props> = ({
  options,
  value,
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

  return (
    <div className="position-relative d-inline-block" ref={containerRef}>
      <button
        type="button"
        className="btn btn-outline-secondary btn-sm"
        onClick={() => setOpen((prev) => !prev)}
      >
        Số dòng/trang: {value}
      </button>
      {open && (
        <div
          className="shadow-sm bg-body border rounded p-2"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            zIndex: 1050,
            minWidth: 140,
            marginTop: 4,
          }}
        >
          {options.map((option) => (
            <div className="form-check" key={option}>
              <input
                type="radio"
                className="form-check-input"
                id={`page-size-${option}`}
                name="page-size"
                checked={value === option}
                onChange={() => {
                  onChange(option);
                  setOpen(false);
                }}
              />
              <label
                className="form-check-label"
                htmlFor={`page-size-${option}`}
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
