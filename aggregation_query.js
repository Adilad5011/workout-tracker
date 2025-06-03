db.collection.aggregate([
  {
    $match: {
      timestamp: {
        $gte: ISODate("2025-05-27T00:00:00Z"),
        $lte: ISODate("2025-06-03T23:59:59Z")
      }
    }
  },
  {
    $group: {
      _id: null,
      totalWorkoutMinutes: {
        $sum: "$workoutMinutes"
      }
    }
  }
]);
