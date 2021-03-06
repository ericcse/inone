'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Category Schema
 */
var CategorySchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Category name',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  groups:{
    type: [{
      type: Schema.ObjectId,
      ref: 'Group'
    }],
  },
});

mongoose.model('Category', CategorySchema);
