class ContactsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :error
    def index
        render json: Contact.all.order("firstname ASC")
    end

    def show
        contact = Contact.find_by!(id: params[:id])
        render json: contact 
    end

    def create
        new_contact = Contact.new(contact_params)
        if new_contact.save
            render json: new_contact
        else 
            render json: {errors: new_contact.errors.full_messages}
        end
    end

    def update
        contact = Contact.find_by(id: params[:id])
        contact.update(contact_params)
        render json: contact
    end

    def destroy
        contact = Contact.find_by(id: params[:id])
        contact.destroy
        render json: {}
    end

    def favorite
        favorite = Contact.where(favorite: "true")
        render json: favorite
    end

private

    def error
        render json: {error: "Contact Not Found"}
    end

    def contact_params
        params.require(:contact).permit(:firstname, :lastname, :phone_number, :address, :description, :photo, :favorite, :user_id)
    end

end