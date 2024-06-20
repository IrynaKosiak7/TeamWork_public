db.videos.countDocuments(
    { // на вход: коллекция videos
        duration_secs: { $lt: 120 * 60 }

    },// выход:  количество видео, которые до 2 часов

)