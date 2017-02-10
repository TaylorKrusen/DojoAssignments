select * from countries;
select * from cities;
select * from languages;

-- problem 1
SELECT countries.name, languages.language, languages.percentage
FROM countries
JOIN languages ON countries.id = languages.country_id
WHERE language='Slovene'
ORDER BY languages.percentage DESC;

-- problem 2
SELECT countries.name, count(cities.name) AS Num_of_cities
FROM countries
JOIN cities ON cities.country_id=countries.id
GROUP BY countries.name
ORDER BY Num_of_cities DESC;

-- problem 3
SELECT cities.name, cities.population
FROM cities
WHERE cities.country_code = 'MEX'AND cities.population > 500000
ORDER BY cities.population DESC;

-- problem #4
SELECT languages.language, languages.percentage
FROM languages
WHERE languages.percentage > 89
ORDER BY languages.percentage DESC;

-- problem #5
SELECT countries.name, countries.surface_area
FROM countries
WHERE surface_area < 501 AND countries.population > 100000;

-- problem #6
SELECT countries.name, countries.government_form, countries.capital, countries.life_expectancy
FROM countries
WHERE countries.government_form = 'Constitutional Monarchy' AND countries.capital > 200 AND countries.life_expectancy > 75;

-- #problem 7
SELECT countries.name, cities.name, cities.population, cities.district
FROM countries 
JOIN cities ON cities.country_id = countries.id
WHERE cities.district = 'Buenos Aires' AND cities.population > 500000;

-- #problem 8
SELECT countries.region, count(countries.name) AS Num_of_Countries
FROM countries
GROUP BY countries.region
ORDER BY Num_of_Countries DESC;
