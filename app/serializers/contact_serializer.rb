class ContactSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :phone_number, :address, :description, :photo, :favorite
  has_one :user
end
