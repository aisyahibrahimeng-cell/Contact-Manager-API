const asyncHandler = require ("express-async-handler");
const { getAllContactsByUser, createContact, getContactById, updateContactById, deleteContactById } = require("../services/contact.service");


const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await getAllContactsByUser( req.user.id);
  res.status(200).json(contacts);
});

const createContactHandler = asyncHandler(async (req, res) => {
  const contact = await createContact  (req.user.id, req.body);
  res.status(201).json(contact);
});

const getContactByIdHandler = asyncHandler(async (req, res) => {
  const contact = await getContactById (req.user.id, req.params.id);
  res.status(200).json(contact);
});

const updateContactByIdHandler = asyncHandler(async (req, res) => {
  const updated = await updateContactById (req.user.id, req.params.id, req.body);
  res.status(200).json(updated);
});

const deleteContactByIdHandler = asyncHandler(async (req, res) => {
  const result = await deleteContactById (req.user.id, req.params.id);
  res.status(200).json(result);
});

module.exports = {
    getAllContacts, 
    createContactHandler,
    getContactByIdHandler,
    updateContactByIdHandler,
    deleteContactByIdHandler
    };