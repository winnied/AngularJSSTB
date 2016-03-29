
// Delete existing stuff. We have not gone over routes in Angular so for the time being we are going to make a single page application.

(function(){
  'use strict';

  angular.module('readingList', [ ])
    .controller('ReadingListController', function(){
      this.books = books;

      // if(book.rating >= 3){this.goodRatingIndeed = true;}

      this.showForm = false;

      this.genres = genres;

      this.addBook = function(book, form){
        this.books.push(book);

        form.reset().$setPristine();
      };
    })
    .directive('bookCover', function(){
      return {
        restrict: 'E',
        templateUrl: 'partials/book-cover.html'
      };
    })
    .directive('bookGenres', function(){
      return {
        restrict: 'E',
        templateUrl: 'partials/book-genres.html'
      };
    })
    /* WINNIE ADDED FROM SOUP TO BITS DEMO
    .directive('reviewForm', function(){
      return{
        restrict: 'E',
        templateUrl: 'partials/form.html',
        replace: true,
        controller: function(){
          this.showForm = false;
          this.book = {}; //empty for when we submit the form, we want to clear the field
          
          this.addReview = function(form){
            books.push(this.book); 
            this.book = {genres:{}}; // because we want to clear our form again

            form.$setPristine(); //this we add so angular can validate our form is clear
          }
        },
        controllerAs: 'reviewFormCtrl',
        scope: {
          books: '=',
          genres: '='
        }
      };
    })
*/
  ;

  var genres = [ 'non-fiction', 'fiction', 'fantasy', 'horror', 'hunor', 'mystery' ];

  var books = [
    { title: 'Pragmatic Thinking & Learning',
      authors: [ 'Andy Hunt' ],
      isbn: '1934356050',
      review: "Loved this book!",
      rating: 4,
      genres: [ 'non-fiction' ],
    },
    { title: 'The Age of Spiritual Machines',
      authors: [ 'Ray Kurzweil' ],
      isbn: '0140282025',
      review: "Would not read again.",
      rating: 2,
      genres: [ 'non-fiction' ],
    },
    { title: 'Elven Star: The Death Gate Cycle',
      authors: [ 'Margaret Weiss', 'Tracy Hickman' ],
      isbn: '0553290983',
      review: "Best fantasy series EVAR",
      rating: 5,
      genres: [ 'fiction', 'fantasy' ],
    }
  ];
})();
