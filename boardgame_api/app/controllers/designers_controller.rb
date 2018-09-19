class DesignersController < ApplicationController
  before_action :set_designer, only: [:show, :update, :destroy]

  # GET /designers
  def index
    @designers = Designer.all

    render json: @designers
  end

  # GET /designers/1
  def show
    render json: @designer
  end

  # POST /designers
  def create
    @designer = Designer.new(designer_params)

    if @designer.save
      render json: @designer, status: :created, location: @designer
    else
      render json: @designer.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /designers/1
  def update
    if @designer.update(designer_params)
      render json: @designer
    else
      render json: @designer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /designers/1
  def destroy
    @designer.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_designer
      @designer = Designer.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def designer_params
      params.require(:designer).permit(:name, :company, :photo_url, :url)
    end
end
