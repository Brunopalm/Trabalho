module.exports = app => {
    const { existsOrError } = app.api.validation

    const save = (req, res) => {
        const people = { ...req.body }
        if(req.params.id) people.id = req.params.id
        try {
            existsOrError(people.title, 'Título não informada')
        } catch(msg) {
            res.status(400).send(msg)
        }
        if(people.id) {
            app.db('peoples')
                .update(people)
                .where({ id: people.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('peoples')
                .insert(people)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('peoples')
                .where({ id: req.params.id }).del()
            
            try {
                existsOrError(rowsDeleted, 'Peoples não foi encontrado.')
            } catch(msg) {
                return res.status(400).send(msg)    
            }

            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    }

    const limit = 10 // usado para paginação
    const get = async (req, res) => {
        const page = req.query.page || 1

        const result = await app.db('documents').count('id').first()
        const count = parseInt(result.count)

        app.db('peoples')
            .select('id', 'title')
            .limit(limit).offset(page * limit - limit)
            .then(documents => res.json({ data: documents, count, limit }))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('peoples')
            .where({ id: req.params.id })
            .first()
            .then(people => {
                return res.json(people)
            })
            .catch(err => res.status(500).send(err))
    }
    
    const getByStudents = async (req, res) => {
        const result = await app.db({p: 'peoples', s: 'students'})
            .select('s.id', 's.description', 's.imageUrl', { title: 'p.title' })
            .whereRaw('?? = ??', ['p.id', 's.people_id'])
            .orderBy('p.title', 'desc')
            .then(students => {
                if(students.length) {
                    title = students[0].title
                    students.map(student => delete student['title'])
                    return (  students )                    
                }else
                    return(  students )                    
            })
            .catch(err => res.status(500).send(err))

        res.json(result)
    }

    const getByTeachers = async (req, res) => {
        const result = await app.db({p: 'peoples', s: 'teachers'})
            .select('s.id', 's.description', 's.imageUrl', { title: 'p.title' })
            .whereRaw('?? = ??', ['p.id', 's.people_id'])
            .orderBy('p.title', 'desc')
            .then(students => {
                if(students.length) {
                    title = students[0].title
                    students.map(student => delete student['title'])
                    return (  students )                    
                }else
                    return(  students )                    
            })
            .catch(err => res.status(500).send(err))

        res.json(result)
    }

    const getByAdmin = async (req, res) => {
        const page = req.query.page || 1
        const result = await app.db({p: 'peoples', s: 'administration'})
            .select('s.id', 's.description', 's.imageUrl', { title: 'p.title' })
            .limit(limit).offset(page * limit - limit)
            .whereRaw('?? = ??', ['p.id', 's.people_id'])
            .orderBy('p.title', 'desc')
            .then(administration => {
                if(administration.length) {
                    title = administration[0].title
                    administration.map(administration => delete administration['title'])
                    return ( {people: administration, title} )                    
                }else
                    return( {people: administration} )                    
            })
            .catch(err => res.status(500).send(err))

        res.json(result)
    }


    return { save, remove, get, getById, getByStudents, getByAdmin, getByTeachers }
}