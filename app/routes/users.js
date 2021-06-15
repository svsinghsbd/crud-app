const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')

const { roleAuthorization } = require('../controllers/auth')

const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser
} = require('../controllers/users')

const {
  validateCreateUser,
  validateGetUser,
  validateUpdateUser,
  validateDeleteUser
} = require('../controllers/users/validators')

/*
 * Users routes
 */

/*
 * Get Users route
 */
router.get(
  '/',
  trimRequest.all,
  getUsers
)

/*
 * Create new User route
 */
router.post(
  '/',
  trimRequest.all,
  validateCreateUser,
  createUser
)

/*
 * Get User route
 */
router.get(
  '/:id',
  trimRequest.all,
  validateGetUser,
  getUser
)

/*
 * Update User route
 */
router.patch(
  '/:id',
  trimRequest.all,
  validateUpdateUser,
  updateUser
)

/*
 * Delete User route
 */
router.delete(
  '/:id',
  trimRequest.all,
  validateDeleteUser,
  deleteUser
)

module.exports = router
