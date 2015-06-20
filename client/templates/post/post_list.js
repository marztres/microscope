var postsData = [
  {
    title: 'Introducing Telescope by @cuantun',
    url: 'http://sachagreif.com/introducing-telescope/'
  },
  {
    title: 'Meteor by @cuantun',
    url: 'http://cuantun.meteor.com'
  },
  {
    title: 'The Meteor Book @cuantun',
    url: 'http://www.cuantun.com'
  }
];
Template.postsList.helpers({
  posts: postsData
});