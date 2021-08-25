class ChildChore < ApplicationRecord
  belongs_to :user
  belongs_to :chore

  # validates: :time_to_complete, presence: true
  # validates: :reward, presence: true
end
