namespace SpriteKind {
    export const vegetation = SpriteKind.create()
    export const pellets = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (slug.vy == 0) {
        slug.vy = -170
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.pellets, function (sprite, otherSprite) {
    otherSprite.destroy()
    human = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    human,
    [img`
        . . . . . f f f f f . . . . . . 
        . . . . f f f f f f f . . . . . 
        1 . . . f d d d d d f . . . 1 . 
        1 1 . . f d 2 d 2 d f . . 1 1 . 
        1 1 1 . . d d d d d . . 1 1 1 . 
        1 1 1 1 . d f f f d . 1 1 1 1 . 
        1 1 1 1 1 . . d . . 1 1 1 1 1 . 
        1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 . 
        1 1 1 d d d d d d d d d 1 1 1 . 
        1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 . 
        . . 1 . 1 1 d . d 1 1 1 . 1 . . 
        . . . . 1 d . . . d 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        1 . . . f f f f f f f . . . 1 . 
        1 1 . . f d d d d d f . . 1 1 . 
        1 1 1 . f d 2 d 2 d f . 1 1 1 . 
        1 1 1 1 . d d d d d . 1 1 1 1 . 
        1 1 1 1 1 d f f f d 1 1 1 1 1 . 
        1 1 1 1 1 1 . d . 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 . 
        1 1 1 d d d d d d d d d 1 1 1 . 
        1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 d . d 1 1 1 1 1 1 . 
        . . 1 . 1 d . . . d 1 . . 1 . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f f f f f f f . . . . . 
        1 . . . f d d d d d f . . . 1 . 
        1 1 . . f d 2 d 2 d f . . 1 1 . 
        1 1 1 . . d d d d d . . 1 1 1 . 
        1 1 1 1 . d f f f d . 1 1 1 1 . 
        1 1 1 1 1 . . d . . 1 1 1 1 1 . 
        1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 . 
        1 1 1 d d d d d d d d d 1 1 1 . 
        1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 d . d 1 1 1 1 1 1 . 
        1 1 1 1 1 d . . . d 1 1 1 1 1 . 
        . . . 1 . . . . . . . . . 1 . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f d d d d d f . . . . . 
        1 . . . f d 2 d 2 d f . . . 1 . 
        1 1 . . . d d d d d . . . 1 1 . 
        1 1 1 . . d f f f d . . 1 1 1 . 
        1 1 1 1 . . . d . . . 1 1 1 1 . 
        1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 . 
        1 1 1 d d d d d d d d d 1 1 1 . 
        1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 d . d 1 1 1 1 1 1 . 
        1 1 1 1 1 d . . . d 1 1 1 1 1 . 
        . . 1 . . . . . . . . 1 . . . . 
        `],
    100,
    true
    )
    human.setPosition(slug.x + 100, slug.x - 180)
    human.follow(slug)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.vegetation, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (slug.y < otherSprite.y) {
        info.changeScoreBy(2)
    } else {
        info.changeLifeBy(-1)
    }
})
let human: Sprite = null
let pellets: Sprite = null
let vegetation: Sprite = null
let slug: Sprite = null
scene.setBackgroundImage(assets.image`Background one`)
slug = sprites.create(img`
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
    `, SpriteKind.Player)
controller.moveSprite(slug, 100, 0)
tiles.setTilemap(tilemap`level1`)
slug.ay = 350
scene.cameraFollowSprite(slug)
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    vegetation = sprites.create(img`
        . 7 7 7 7 7 . . . . . . . . . . 
        . 7 6 7 6 7 7 . . . . . . . . . 
        . 7 7 6 7 6 7 7 . . . . . . . . 
        . 7 6 7 6 7 6 7 7 . . . . . . . 
        . 7 7 6 7 6 7 6 7 7 . . . . . . 
        . . 7 7 6 7 6 7 6 7 7 . . . . . 
        . . . 7 7 6 7 6 7 6 7 7 . . . . 
        . . . . 7 7 6 7 6 7 6 7 7 . . . 
        . . . . . 7 7 6 7 6 7 6 7 7 . . 
        . . . . . . 7 7 6 7 6 7 6 7 7 . 
        . . . . . . . 7 7 6 7 6 7 6 7 . 
        . . . . . . . . 7 7 6 7 6 7 7 . 
        . . . . . . . . . 7 7 6 7 6 7 . 
        . . . . . . . . . . 7 7 7 7 7 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.vegetation)
    animation.runImageAnimation(
    vegetation,
    [img`
        . . 6 7 7 8 . . 
        . 6 7 7 8 . . . 
        . 8 7 8 . . 6 8 
        . 8 7 8 . 6 6 8 
        . . 8 6 8 8 8 . 
        . . . 8 6 8 . . 
        6 6 . . 8 7 8 . 
        8 6 6 8 7 7 8 . 
        . 8 8 7 7 8 . . 
        . 8 7 7 8 . . . 
        . 8 7 8 . 8 6 . 
        . 8 7 8 . 8 6 6 
        . . 8 6 8 . 8 8 
        . . . 8 6 8 . . 
        . . . . 8 7 8 . 
        . . . 6 7 7 8 . 
        `,img`
        . . . . . . . . 
        . . 6 7 7 8 . . 
        . 6 7 7 8 . . . 
        . 8 7 8 . . 6 8 
        . 8 7 8 . 6 6 8 
        . . 8 6 8 8 8 . 
        . . . 8 6 8 . . 
        6 6 . . 8 7 8 . 
        8 6 6 8 7 7 8 . 
        . 8 8 7 7 8 . . 
        . 8 7 7 8 . . . 
        . 8 7 8 . 8 6 . 
        . 8 7 8 . 8 6 6 
        . . 8 6 8 . 8 8 
        . . . 8 6 8 . . 
        . . . . 8 7 8 . 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . 6 7 7 8 . . 
        . 6 7 7 8 . . . 
        . 8 7 8 . . 6 8 
        . 8 7 8 . 6 6 8 
        . . 8 6 8 8 8 . 
        . . . 8 6 8 . . 
        6 6 . . 8 7 8 . 
        8 6 6 8 7 7 8 . 
        . 8 8 7 7 8 . . 
        . 8 7 7 8 . . . 
        . 8 7 8 . 8 6 . 
        . 8 7 8 . 8 6 6 
        . . 8 6 8 . 8 8 
        . . . 8 6 8 . . 
        `,img`
        . . 6 7 7 8 . . 
        . 6 7 7 8 . . . 
        . 8 7 8 . . 6 8 
        . 8 7 8 . 6 6 8 
        . . 8 6 8 8 8 . 
        . . . 8 6 8 . . 
        6 6 . . 8 7 8 . 
        8 6 6 8 7 7 8 . 
        . 8 8 7 7 8 . . 
        . 8 7 7 8 . . . 
        . 8 7 8 . 8 6 . 
        . 8 7 8 . 8 6 6 
        . . 8 6 8 . 8 8 
        . . . 8 6 8 . . 
        . . . . 8 7 8 . 
        . . . 6 7 7 8 . 
        `,img`
        . . . . . . . . 
        . . 6 7 7 8 . . 
        . 6 7 7 8 . . . 
        . 8 7 8 . . 6 8 
        . 8 7 8 . 6 6 8 
        . . 8 6 8 8 8 . 
        . . . 8 6 8 . . 
        6 6 . . 8 7 8 . 
        8 6 6 8 7 7 8 . 
        . 8 8 7 7 8 . . 
        . 8 7 7 8 . . . 
        . 8 7 8 . 8 6 . 
        . 8 7 8 . 8 6 6 
        . . 8 6 8 . 8 8 
        . . . 8 6 8 . . 
        . . . . 8 7 8 . 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . 6 7 7 8 . . 
        . 6 7 7 8 . . . 
        . 8 7 8 . . 6 8 
        . 8 7 8 . 6 6 8 
        . . 8 6 8 8 8 . 
        . . . 8 6 8 . . 
        6 6 . . 8 7 8 . 
        8 6 6 8 7 7 8 . 
        . 8 8 7 7 8 . . 
        . 8 7 7 8 . . . 
        . 8 7 8 . 8 6 . 
        . 8 7 8 . 8 6 6 
        . . 8 6 8 . 8 8 
        . . . 8 6 8 . . 
        `],
    500,
    true
    )
    tiles.placeOnTile(vegetation, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
    pellets = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . 8 6 8 8 8 . . . . . . 
        . . . . . 8 6 9 8 8 . . . . . . 
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . . 8 8 6 6 8 . . . . . . 
        . . . . . 8 6 9 8 8 . . . . . . 
        . . . . . 8 8 6 8 8 . . . . . . 
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . . 8 8 8 6 8 . . . . . . 
        . . . . . 8 6 8 6 8 . . . . . . 
        . . . . . 8 6 9 8 8 . . . . . . 
        . . . . . 8 8 6 8 8 . . . . . . 
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.pellets)
    tiles.placeOnTile(pellets, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
game.onUpdate(function () {
    slug.setImage(img`
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
        `)
    if (slug.vx < 0) {
        slug.image.flipX()
    }
    if (slug.vy < 0) {
        slug.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f . . . . f . 
            . . . . . . . . . . 1 . . 1 . . 
            . . . . . e e e . . . e e . . . 
            . . . e e e e e e . e e 2 . . . 
            . e e e e . . . e e e 2 e . . . 
            . . e . . . . . . e e e . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
    	
    }
})
