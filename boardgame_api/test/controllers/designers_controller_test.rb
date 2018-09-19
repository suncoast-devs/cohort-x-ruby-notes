require 'test_helper'

class DesignersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @designer = designers(:one)
  end

  test "should get index" do
    get designers_url, as: :json
    assert_response :success
  end

  test "should create designer" do
    assert_difference('Designer.count') do
      post designers_url, params: { designer: { company: @designer.company, name: @designer.name, photo_url: @designer.photo_url, url: @designer.url } }, as: :json
    end

    assert_response 201
  end

  test "should show designer" do
    get designer_url(@designer), as: :json
    assert_response :success
  end

  test "should update designer" do
    patch designer_url(@designer), params: { designer: { company: @designer.company, name: @designer.name, photo_url: @designer.photo_url, url: @designer.url } }, as: :json
    assert_response 200
  end

  test "should destroy designer" do
    assert_difference('Designer.count', -1) do
      delete designer_url(@designer), as: :json
    end

    assert_response 204
  end
end
