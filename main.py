scene.set_background_image(assets.image("""
    Background one
"""))
mySprite = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f . . . . f 
            . . . . . . . . . . . 1 . . 1 . 
            . . . . . . . . . . . . e e . . 
            . . . . . . . . . . . e e 2 . . 
            . . e e e e e e e e e e 2 e . . 
            . . . e e e e e e e e e e . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.player)
controller.move_sprite(mySprite)
tiles.set_tilemap(tilemap("""
    level1
"""))