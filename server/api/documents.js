module.exports = app => {
    const { existsOrError } = app.api.validation

    const save = (req, res) => {
        const document = { ...req.body }
        try {
            existsOrError(document.title, 'Título não informado')
            existsOrError(document.description, 'Descrição não informada')
            existsOrError(document.anexos, 'Anexo não informado')
        } catch(msg) {
            res.status(400).send(msg)
        }
                     
        if(document.id) {
            app.db('documents')
                .update(document)
                .where({ id: document.id })
                .then(_ => res.status(200).send('Atualizado com sucesso!!!')
)
                .catch(err => res.status(500).send(err))
        } else {
            app.db('documents')
                .insert(document)
                .then(_ =>  res.status(200).send('Salvo com sucesso!!!'))
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('documents')
                .where({ id: req.params.id }).del()
            
            try {
                existsOrError(rowsDeleted, 'Documento não foi encontrado.')
            } catch(msg) {
                return res.status(400).send(msg)    
            }

            res.status(200).send('Removido com sucesso!!!')
        } catch(msg) {
            res.status(500).send(msg)
        }
    }

    const limit = 10 // usado para paginação
    const get = async (req, res) => {
        const page = req.query.page || 1

        const result = await app.db('documents').count('id').first()
        const count = parseInt(result.count)

        app.db('documents')
            .select('id', 'title', 'description', 'anexos')
            .limit(limit).offset(page * limit - limit)
            .then(documents => {
                documents.map( (document) =>{                    
                    document.description = document.description.toString()
                    document.anexos = document.anexos.toString()                
                })
                res.json({ data: documents, count, limit })
            })
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('documents')
            .where({ id: req.params.id })
            .first()
            .then(_document => {
                _document.anexos = _document.anexos.toString()                
                _document.description = _document.description.toString()
                return res.json(_document)
            })
            .catch(err => res.status(500).send(err))
    }

    const getByTitle = (req, res) => {
        const title =  req.body.title
            app.db('documents')
                .where({ title })
                .then(document => {
                    return res.send(document)
                })
                .catch( err =>  res.status(500).send(err) )            

    }


    return { save, remove, get, getById, getByTitle }
}