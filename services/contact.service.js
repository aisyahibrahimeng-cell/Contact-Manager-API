const mongoose = require('mongoose');
const {contactModel} = require('../models/contact.model');

const getAllContactsByUser = async (userId) => {
    return contactModel.find({ user_id: userId });
}

const createContact = async (userId, data) => {
    const { name, phone, email } = data;
    if (!(name && phone && email)) {
        throw new Error('Name, phone and email are required');
    }
    return contactModel.create({ name, phone, email, user_id: userId });
}

const getContactById = async (userId, id) => {
    const contact = await contactModel.findById(id);
    if (!contact) throw new Error('Contact not found');
    if (!contact.user_id || contact.user_id.toString() !== userId) {
        throw new Error('Not authorized to view this contact');
    }
    return contact;
}

const updateContactById = async (userId, id, update) => {
    const contact = await contactModel.findById(id);
    if (!contact) throw new Error('Contact not found');
    if (contact.user_id.toString() !== userId) {
        throw new Error('Not authorized to update this contact');
    }
    return contactModel.findByIdAndUpdate(id, update, { new: true });
}

const deleteContactById = async (userId, id) => {
    const contact = await contactModel.findById(id);
    if (!contact) throw new Error('Contact not found');
    if (contact.user_id.toString() !== userId) {
        throw new Error('Not authorized to delete this contact');
    }
    await contact.deleteOne();
    return { message: 'Contact deleted successfully!' };
}

module.exports = {
  getAllContactsByUser,
  createContact,
  getContactById,
  updateContactById,
  deleteContactById
};
