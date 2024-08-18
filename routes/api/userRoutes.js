const router = require('express').Router();
const { 
    getUsers,
    getSingleUser, 
    createUser, 
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
 } = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser);

router.route("/:userId/friends").post(addFriend);

router.route("/:userId/friends/:friendsId").delete(removeFriend);

router
.put(updateUser)
.delete(deleteUser);

module.exports = router;