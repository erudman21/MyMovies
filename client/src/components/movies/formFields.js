export default [
  {
    label: "What movie do you want to add?",
    name: "title",
    valueError: "You must provide a movie title!",
    type: "text"
  },
  {
    label: "When did you watch it?",
    name: "dateSeen",
    valueError: "You didn't select a date!",
    type: "date"
  },
  {
    label: "How would you rate it?",
    name: "personalRating",
    valueError: "You didn't provide a rating!",
    type: "number"
  },
  {
    label: "Add your own comments on the movie!",
    name: "personalComments",
    valueError: "You didn't say anything!",
    type: "text"
  }
];
