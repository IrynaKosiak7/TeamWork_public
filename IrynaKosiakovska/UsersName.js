db.users.aggregate([
    {
        $match: {
            balance: {
                $gt: 100,
                $lt: 2000
            }
        }
    },
    {
        $lookup: {
            from: 'posts_reactions',
            localField: 'posts_reactions_id',
            foreignField: '_id',
            as: 'posts_reactions'
        }
    },
    { $unwind: '$posts_reactions' },


    { $project: { posts_reactions_fullname: '$posts_reactions', _id: 0 } }
])