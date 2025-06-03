# MongoDB Aggregation Task – Workout Stats

## Task Description
Calculate total workout time (in minutes) over the last 7 days using MongoDB aggregation.

## Dataset
Sample workout entries with `userId`, `timestamp`, and `workoutMinutes`.

## Query
Aggregation uses `$match` to filter documents from the last 7 days and `$group` to sum the total workout minutes.

## Author
[Aditya Lad]
