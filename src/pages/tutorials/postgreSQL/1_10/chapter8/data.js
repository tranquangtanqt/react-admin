export const PostgreSQLChapter8Data = {
    one: `UPDATE person
SET state_code = cities.state_code
FROM cities
WHERE cities.city = city;`,

    two: `UPDATE person SET planet = 'Earth';`,

    three: `UPDATE person SET state = 'NY' WHERE city = 'New York';`,

    four: `UPDATE person
    SET country = 'USA',
    state = 'NY'
WHERE city = 'New York';`,
}