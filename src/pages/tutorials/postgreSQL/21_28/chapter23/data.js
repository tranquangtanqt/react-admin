export const PostgreSQLChapter23Data = {
    one: `#!/bin/sh
cd /save_db
#rm -R /save_db/*
DATE=$(date +%d-%m-%Y-%Hh%M)
echo -e "Sauvegarde de la base du \${DATE}"
mkdir prodDir\${DATE}
cd prodDir\${DATE}
#dump file
/opt/postgres/9.0/bin/pg_dump -i -h localhost -p 5432 -U postgres -F c -b -w -v -f
"dbprod\${DATE}.backup" dbprod
#SQL file
/opt/postgres/9.0/bin/pg_dump -i -h localhost -p 5432 -U postgres --format plain --verbose -f
"dbprod\${DATE}.sql" dbprod`
}