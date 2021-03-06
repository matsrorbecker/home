// Generated by CoffeeScript 1.10.0
(function() {
  var App,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  App = (function() {
    function App() {}

    App.prototype.VALID_COMMANDS = ['help', 'clear', 'about', 'contact', 'cv'];

    App.prototype.HELP_TEXT = ['help -- list available commands', 'clear -- clear the terminal screen', 'about -- show some info about me', 'contact -- learn how to contact me', 'cv -- take a look at my curriculum vitae', ''];

    App.prototype.ABOUT_TEXT = ["I'm a journalist and a programmer. I work for the Swedish news agency TT.", 'I have a big interest in things like data journalism, automated journalism and language technology.', 'When programming, I like to use Node.js, Coffeescript and Backbone.', 'I have lots of kids and a wife.', "I'm from Oskarshamn but I live in Haegersten, Stockholm.", 'Forza Bajen!', ''];

    App.prototype.CONTACT_TEXT = ['Follow me on Twitter: @matsrorbecker', 'Send me an email: mats@rorbecker.com', 'Send me an email at work: mats.rorbecker@tt.se', 'Give me a call: +46 70 207 28 67', "Oh, and I'm on Linkedin.", ''];

    App.prototype.CV_TEXT = ['Studies:', "2013-2015 -- Studied computer science at Stockholm university. Got a bachelor's degree.", '2003-2004 -- Distance studies in business economics, Mid Sweden university, Sundsvall.', '1998-1999 -- Studies in sociology, Stockholm university.', '1996-1998 -- Journalist program, Ljungskile folkhoegskola.', '', 'Work:', '2001-present -- Reporter, TT News Agency.', '2000-2001 -- Editor, online newspaper 24timmar.se, Uppsala.', '1999-2000 -- Temporary jobs as reporter/news presenter P4 Uppland.', '1998 -- Internship, summer job as reporter/news presenter P4 Sjuhaerad.', '1995-1996 -- Internship, temporary jobs as reporter Nyheterna newspaper, Oskarshamn.', ''];

    App.prototype.GREETINGS = ['hi', 'hello', 'hey', 'hej', 'hallå', 'tja', 'tjena'];

    App.prototype.start = function() {
      $('input').keypress(function(e) {
        if (e.which === 13) {
          e.preventDefault();
          return $('form').submit();
        }
      });
      $('form').submit((function(_this) {
        return function(e) {
          var command, input;
          e.preventDefault();
          input = $('input');
          command = input.val().toLowerCase().trim();
          _this.checkIfValid(command);
          return input.val('');
        };
      })(this));
      return $('input').focus();
    };

    App.prototype.checkIfValid = function(command) {
      var text;
      text = '';
      if (indexOf.call(this.VALID_COMMANDS, command) >= 0) {
        text = this.getResultOf(command);
      } else {
        text = this.getErrorFor(command);
      }
      return this.log(text);
    };

    App.prototype.getResultOf = function(command) {
      var text;
      text = '';
      switch (command) {
        case 'help':
          text = this.HELP_TEXT.join('\n');
          break;
        case 'clear':
          $(output).val('');
          break;
        case 'about':
          text = this.ABOUT_TEXT.join('\n');
          break;
        case 'contact':
          text = this.CONTACT_TEXT.join('\n');
          break;
        case 'cv':
          text = this.CV_TEXT.join('\n');
          break;
        default:
          text = command;
      }
      return text;
    };

    App.prototype.getErrorFor = function(command) {
      var text;
      text = "Command not found. Type 'help' to list valid commands.";
      if (this.GREETINGS.some(function(greeting) {
        return command.indexOf(greeting) >= 0;
      })) {
        text = 'Hi there.';
      } else if (command.indexOf('rm -rf') >= 0) {
        text = 'Ha ha. Nice try.';
      }
      return text + '\n';
    };

    App.prototype.log = function(text) {
      var newText, oldText, output;
      output = $('#output');
      oldText = output.val();
      newText = text + '\n' + oldText;
      return output.val(newText);
    };

    return App;

  })();

  $(function() {
    return new App().start();
  });

}).call(this);
