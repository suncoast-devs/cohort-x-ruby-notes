require "application_system_test_case"

class DesignersTest < ApplicationSystemTestCase
  setup do
    @designer = designers(:one)
  end

  test "visiting the index" do
    visit designers_url
    assert_selector "h1", text: "Designers"
  end

  test "creating a Designer" do
    visit designers_url
    click_on "New Designer"

    fill_in "Company", with: @designer.company
    fill_in "Name", with: @designer.name
    fill_in "Photo Url", with: @designer.photo_url
    fill_in "Url", with: @designer.url
    click_on "Create Designer"

    assert_text "Designer was successfully created"
    click_on "Back"
  end

  test "updating a Designer" do
    visit designers_url
    click_on "Edit", match: :first

    fill_in "Company", with: @designer.company
    fill_in "Name", with: @designer.name
    fill_in "Photo Url", with: @designer.photo_url
    fill_in "Url", with: @designer.url
    click_on "Update Designer"

    assert_text "Designer was successfully updated"
    click_on "Back"
  end

  test "destroying a Designer" do
    visit designers_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Designer was successfully destroyed"
  end
end
