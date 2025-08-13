import express from 'express';
import isAuthenticated from '../middleware/isAuthenticated.js';
import { addMember, createCommunity, getAllCommunities, getCommunityById, removeCommunity, removeMember, todays_contributor } from '../controllers/CommunityController.js';

const router = express.Router();

router.route('/').post(isAuthenticated,createCommunity);
router.route('/member').post(isAuthenticated,addMember);
router.route('/remove-member').post(isAuthenticated,removeMember);
router.route('/').get(isAuthenticated,getAllCommunities);
router.route('/:communityId').get(isAuthenticated, getCommunityById);
router.route('/:communityId').delete(isAuthenticated,removeCommunity);
router.route('/contributor').post(isAuthenticated,todays_contributor);

export default router;