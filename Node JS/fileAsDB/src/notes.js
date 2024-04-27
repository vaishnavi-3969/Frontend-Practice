import { saveDB, insertDB, getDB } from "./db"


export const newNote = async(note, tags) => {
    const newNote = {
        id: Date.now(),
        content: note,
        tags: tags
    }
    await insertDB(newNote)
    return newNote
}

export const getAllNotes = async() => {
    const db = await getDB()
    return db.notes
}

export const findNotes = async(filter) => {
    const db = await getDB()
    return db.notes.filter(note => note.content.toLowerCase().includes(filter.toLowerCase()))
}

export const removeNote = async(id) => {
    const db = await getDB()
    const note = db.notes.find(note => note.id === id)
    if (note) {
        db.notes = db.notes.filter(note => note.id !== id)
        await saveDB(db)
        return id
    }
    return null
}


export const removeAllNotes = () => {
    return saveDB({notes: []})
}





