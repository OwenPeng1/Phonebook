# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

owen = User.create(name: "Owen", username: "Owen", password: "Peng")
sam= User.create(name:"Sam", username: "Sam", password: "Woobly")

Contact.create(firstname: "Lebron",
                lastname: "James",
                phone_number: "2323232323",
                address: "6 Heat Ave",
                description: "Basketball Player",
                photo: 'https://static.highsnobiety.com/thumbor/eamsHEgOsqwMKvzVtNwCmS-X7eQ=/fit-in/1200x720/smart/static.highsnobiety.com/wp-content/uploads/2020/02/21160908/lebron-james-uninterrupted-sued-feature.jpg',
                favorite: false,
                user_id: owen.id)

Contact.create(firstname: "Elon",
                lastname: "Musk",
                phone_number: "1234567890",
                address: "9 Tesla Lane",
                description: "Inventor Billionaire",
                photo: 'https://i1.wp.com/www.herald.ng/wp-content/uploads/2020/04/elon_musk_royal_society.jpg?fit=1200%2C1200&ssl=1',
                favorite: false,
                user_id: owen.id)

Contact.create(firstname: "Ben",
                lastname: "Affleck",
                phone_number: "0707070707",
                address: "37 Hunting Lane",
                description: "Actor",
                photo: 'https://www.oxygen.com/sites/oxygen/files/field_blog_image/2018/08/ben_affleck-g.jpg',
                favorite: false,
                user_id: owen.id)

Contact.create(firstname: "Sundar",
                lastname: "Pichai",
                phone_number: "8989898989",
                address: "58 Google Lane",
                description: "Tech CEO",
                photo: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Sundar_pichai.png',
                favorite: false,
                user_id: owen.id)

Contact.create(firstname: "Walt",
                lastname: "Disney",
                phone_number: "0987654321",
                address: "1 Magic Kingdom",
                description: "Inventor",
                photo: 'https://www.biographyarchive.com/wp-content/uploads/2009/11/Walt-Disney.jpg',
                favorite: false,
                user_id: owen.id)





