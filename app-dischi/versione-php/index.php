<?php include 'database/dischi.php'; ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>PHP dischi</title>
        <link rel="stylesheet" href="../dist/css/style.css">
    </head>
    <body>
        <header>
            <div class="logo">
                <img src="logo/logo.png" alt="">
            </div>
        </header>
        <div class="container-cd">
            <?php foreach ($dischi as $disco) { ?>
                <div class="cd <?php echo $disco['genre']; ?>">
                    <img src="<?php echo $disco['poster']; ?>" alt="">
                    <h2><?php echo $disco['title']; ?></h2>
                    <p></p>
                    <p class='autore'><?php echo $disco['author']; ?></p>
                    <p class='anno'><?php echo $disco['year']; ?></p>

                </div>
            <?php } ?>
        </div>
    </body>
</html>
