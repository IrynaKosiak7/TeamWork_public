db.videos.aggregate([
    { // на вход: коллекция videos
        $match: { duration_secs: { $lt:  120 * 60 } }
    },// выход: videos, которые до 2 часов

    { $count: 'total_videos' }
    //выход: количество (совпадиний) видео
])

db.videos.countDocuments(
    { // на вход: коллекция videos
        duration_secs: { $lt: 120 * 60 }

    },// выход:  количество видео, которые до 2 часов

)