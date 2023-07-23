class MessagesController < ApplicationController
  def index
    @messages = Message.all
    render.json: @messages
  end

  def create
    @message = Message.new(message_params)
    # @message.user_id = current_user.id

    if @message.save
      render json: @message, status: :created
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  private

  def message_params
    print(params)
    binding.pry
    params.require(:message).permit(params.keys.to_h.to_s)
  end

end
