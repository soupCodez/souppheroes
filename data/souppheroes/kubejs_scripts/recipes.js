onEvent('recipes', event => {
  event.shaped('2x souppheroes:tape', [
    ' B ',
    'BSB',
    ' BW'
  ], {
    S: 'minecraft:slime_ball',
    B: 'minecraft:black_dye',
    W: 'minecraft:water_bucket'
  })
  event.shapeless('1x arc:reactor_with_suit', ['souppheroes:arc_reactor', 'souppheroes:ironman_head', 'souppheroes:ironman_chest', 'souppheroes:ironman_legs', 'souppheroes:ironman_feet'])
})