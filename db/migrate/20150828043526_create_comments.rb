class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|

      t.timestamps null: false
      t.integer :newpf_id
      t.integer :user_id
      t.string :context
    end
  end
end
