module.exports = app => {
    const { existsOrError } = app.api.validation

    const save = (req, res) => {
        const prodution = { ...req.body }
        if(req.params.id) prodution.id = req.params.id
        try {
            existsOrError(prodution.name, 'Título não informada')
        } catch(msg) {
            res.status(400).send(msg)
        }
        if(prodution.id) {
            app.db('prodution')
                .update(prodution)
                .where({ id: prodution.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('prodution')
                .insert(prodution)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('prodution')
                .where({ id: req.params.id }).del()
            
            try {
                existsOrError(rowsDeleted, 'prodution não foi encontrado.')
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

        app.db('prodution')
            .select('id', 'name')
            .then(documents => res.json({ data: documents }))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('prodution')
            .where({ id: req.params.id })
            .first()
            .then(prodution => {
                return res.json(prodution)
            })
            .catch(err => res.status(500).send(err))
    }

    const getByStudents = async (req, res) => {
        const page = req.query.page || 1
        app.db({p: 'prodution', s: 'students'})
            .select('s.id', 's.description', 's.imageUrl', { name: 'p.name' })
            .limit(limit).offset(page * limit - limit)
            .whereRaw('?? = ??', ['p.id', 's.prodution_id'])
            .orderBy('p.name', 'desc')
            .then(students =>{
                name = students[0].name
                students.map(student => delete student['name'])
                res.json( {data: students, name} )
            })
            .catch(err => res.status(500).send(err))
    }

    return { save, remove, get, getById, getByStudents }
}