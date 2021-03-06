class PlayerSerializer < ActiveModel::Serializer
  attributes(:id, :name, :x, :y, :direction)

  embed(:ids, :include => true)
  has_one(:spritesheet, :key => :spritesheet)
  has_one(:area, :key => :area)
end
