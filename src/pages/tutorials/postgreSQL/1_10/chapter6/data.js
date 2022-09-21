export const PostgreSQLChapter6Data = {
    one: `SELECT COALESCE(NULL, NULL, 'HELLO WORLD');

 coalesce
--------
 HELLO WORLD`,

    two: `SELECT COALESCE(NULL, NULL, 'first non null', NULL, NULL, 'second non null');

 coalesce
--------
 first non null`,

    three: `SELECT COALESCE(NULL, NULL, NULL);
    
 coalesce
--------
 null`
}