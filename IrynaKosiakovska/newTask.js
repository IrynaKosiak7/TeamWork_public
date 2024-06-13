db.users.aggregate([
    { $match: { is_blocked: { $ne: true } } },
    { $count: 'total_users_is_not_blocked' }

])