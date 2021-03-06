'use strict';

const _ = require('lodash');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const focusSchema = new Schema({
	focus_pubDate: {type: String},
	item_id: {type: String},
	title: {type: String},
	pubDate: {type: String},
	category: {type: String},
	video300k: {type: String},
	video500k: {type: String},
	tags: {type: String},
	image_url: {type: String},
	image_url_big: {type: String},
	description: {type: String},
}, {timestamps: {createdAt: '_created_at', updatedAt: '_updated_at'}});

focusSchema.index({_created_at: -1});
focusSchema.index({_updated_at: -1});

module.exports = mongoose.model('focus', focusSchema);
