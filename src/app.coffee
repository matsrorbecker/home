class App

    VALID_COMMANDS = [
        'help'
        'clear'
        'about'
        'contact'
        'cv'
    ]

    HELP_TEXT = [
        'help -- list available commands'
        'clear -- clear the terminal screen'
        'about -- show some info about me' 
        'contact -- learn how to contact me'
        'cv -- take a look at my curriculum vitae'
        ''
    ]

    ABOUT_TEXT = [
        "I'm a journalist and a programmer. I work for the Swedish news agency TT."
        'I have a big interest in things like data journalism, automated journalism and language technology.'
        'When programming, I like to use Node.js, Coffeescript and Backbone.'
        'I have lots of kids and a wife.'
        "I'm from Oskarshamn but I live in Haegersten, Stockholm."
        'Forza Bajen!'
        ''
    ]

    CONTACT_TEXT = [
        'Follow me on Twitter: @matsrorbecker'
        'Send me an email: mats@rorbecker.com'
        'Send me an email at work: mats.rorbecker@tt.se'
        'Give me a call: +46 70 207 28 67'
        "Oh, and I'm on Linkedin."
        ''
    ]

    CV_TEXT = [
        'Studies:'
        "2013-2015 -- Studied computer science at Stockholm university. Got a bachelor's degree."
        '2003-2004 -- Distance studies in business economics, Mid Sweden university, Sundsvall.'
        '1998-1999 -- Studies in sociology, Stockholm university.'
        '1996-1998 -- Journalist program, Ljungskile folkhoegskola.'
        ''
        'Work:'
        '2001-present -- Reporter, TT News Agency.'
        '2000-2001 -- Editor, online newspaper 24timmar.se, Uppsala.'
        '1999-2000 -- Temporary jobs as reporter/news presenter P4 Uppland.'
        '1998 -- Internship, summer job as reporter/news presenter P4 Sjuhaerad.'
        '1995-1996 -- Internship, temporary jobs as reporter Nyheterna newspaper, Oskarshamn.'
        ''
    ]

    GREETINGS = [
        'hi'
        'hello'
        'hey'
        'hej'
        'hallå'
        'tja'
        'tjena'
    ]

    start: ->

        $('input').keypress (e) ->
            if e.which is 13
                e.preventDefault()
                $('form').submit()

        $('form').submit (e) =>
            e.preventDefault()
            input = $('input')
            command = input.val().toLowerCase().trim()
            @checkIfValid command
            input.val ''

        $('input').focus()

    checkIfValid: (command) ->
        text = ''

        if command in VALID_COMMANDS
            text = @getResultOf command
        else
            text = @getErrorFor command

        @log text

    getResultOf: (command) ->
        text = ''

        switch command
            when 'help'
                text = HELP_TEXT.join '\n'
            when 'clear'
                $(output).val ''
            when 'about'
                text = ABOUT_TEXT.join '\n'
            when 'contact'
                text = CONTACT_TEXT.join '\n'
            when 'cv'
                text = CV_TEXT.join '\n'
            else
                text = command

        text

    getErrorFor: (command) ->
        text = "Command not found. Type 'help' to list valid commands."

        if (GREETINGS.some (greeting) -> 
            command.indexOf(greeting) >= 0) 
                text = 'Hi there.'
        else if (command.indexOf('rm -rf') >= 0)
            text = 'Ha ha. Nice try.'

        text + '\n'

    log: (text) ->
        output = $('#output')
        oldText = output.val() 
        newText = text + '\n' + oldText
        output.val newText


$ ->
    new App().start()