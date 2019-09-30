PennController.ResetPrefix(null);
PennController.Sequence("LexTale_instructions", "LexTale_trials", "closing")

//// Implement the LexTale test
// Instructions:
    PennController("LexTale_instructions",
        defaultText
            .print()
        ,
        newText("<p>Welcome!</p>")
        ,
        newText("<p>This test consists of about 60 trials, in each of which you will see a string of letters. Your task is to decide whether this is an existing English word or not.</p>")
        ,
        newText("<p>If you think it is an existing English word, you click on <strong>yes</strong>, and if you think it is not an existing English word, you click on <strong>no</strong>.</p>")
        ,
        newText("<p>If you are sure that the word exists, even though you don’t know its exact meaning, you may still respond <strong>yes</strong>.</p>")
        ,
        newText("<p>But if you are not sure if it is an existing word, you should respond <strong>no</strong>. </p>")
        ,
        newText("<p>In this experiment, we use British English rather than American English spelling. For example: <italic>realise</italic> instead of <italic>realize</italic>; <italic>colour</italic> instead of <italic>color</italic>, and so on.</p>") 
        ,
        newText("<p>Please don’t let this confuse you. This experiment is not about detecting such subtle spelling differences anyway.</p>") 
        ,
        newText("<p>You have as much time as you like for each decision. This part of the experiment will take about 5 minutes.</p>") 
        ,
        newText("<p>Click the button below to start the experiment.</p>")
    	,
        newButton("Start")
            .print()
            .wait()
    )
    
// Trials
    PennController.Template(
        PennController.GetTable( "stimuli.csv")
        ,
        trial => PennController("LexTale_trials",
            newText("stimulus", trial.Stimulus)
                .settings.css("font-size", "60px")
                .settings.css("font-family", "avenir")
                .settings.bold()
                .settings.center()
                .print()
              ,
            newText("no", "No")
                .settings.css("font-size", "60px")
                .settings.css("font-family", "avenir")
                .settings.color("red")
                .settings.bold()
            ,
            newText("yes", "Yes")
                .settings.css("font-size", "60px")
                .settings.css("font-family", "avenir")
                .settings.color("green")
                .settings.bold()

            ,
            newCanvas(800, 600)
                .settings.add( 0,     100,      getText("no"))
                .settings.add( 500,     100,    getText("yes"))
                .print()
            ,
            newSelector()
                .settings.add(getText("no") , getText("yes") )
                .settings.log()
                .wait()
        )
    .log( "Stimulus"    , trial.Stimulus    )
    .log( "Type"        , trial.Type        )
    .log( "Block"       , trial.Block       )
    )
    
// Closing text
    PennController("closing",
        defaultText
            .print()
        ,
        newText("<p>Thank you for participating!</p>")
    )
    
