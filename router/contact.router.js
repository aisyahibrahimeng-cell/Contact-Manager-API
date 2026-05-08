const {Router} = require ("express");
const { getAllContacts, createContactHandler, getContactByIdHandler, updateContactByIdHandler, deleteContactByIdHandler } = require("../controllers/contact.controller");
const validateToken = require("../middleware/validateTokenHandler.middleware");

const router = Router();
router.use (validateToken);

router.route ("/")
    .get(getAllContacts)
    .post(createContactHandler)
router.route ("/:id")
    .get(getContactByIdHandler)
    .patch(updateContactByIdHandler)
    .delete(deleteContactByIdHandler)

module.exports = router;

