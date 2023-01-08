db.createUser({
    user: 'bicycle_usr',
    password: 'bicycle$$',
    roles: [
        {
            role: 'readWrite',
            db: 'bicycle'
        }
    ]
})