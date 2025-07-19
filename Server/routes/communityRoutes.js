import express from 'express';
import isAuthenticated from '../middleware/isAuthenticated.js';
import { addMember, createCommunity, getAllCommunities, getCommunityById, removeCommunity, removeMember } from '../controllers/CommunityController.js';

const router = express.Router();

router.route('/create').post(isAuthenticated,createCommunity);
router.route('/add-member').post(isAuthenticated,addMember);
router.route('/remove-member').post(isAuthenticated,removeMember);
router.route('/get-all').get(isAuthenticated,getAllCommunities);
router.route('/get/:communityId').get(isAuthenticated, getCommunityById);
router.route('/delete-community/:communityId').delete(isAuthenticated,removeCommunity);

export default router;