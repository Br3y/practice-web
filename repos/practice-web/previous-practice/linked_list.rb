# frozen_string_literal: true

class LinkedList
  attr_accessor :head

  def initialize
    self.head = nil
  end

  def add(value)
    if head.nil?
      self.head = Node.new(value, nil)
    else
      lastNode = head
      lastNode = lastNode.nextNode until lastNode.nextNode.nil?
      # We are at the end of the list.
      lastNode.nextNode = Node.new(value, nil)
    end
  end

  def find(value)
    node = head
    until node.nil?
      return true if node.value == value

      node = node.nextNode
    end

    false
  end

  def prepend(value)
    if head.nil?
      self.head = Node.new(value, nil)
    else
      old_head = head
      self.head = Node.new(value, old_head)
    end
  end

  def remove(value)
    return if head.nil?

    node = head
    prev_node = nil
    until node.nil?
      if node.value == value
        if !prev_node.nil?
          prev_node.nextNode = node.nextNode
        else
          self.head = nil
        end
        return
      end
      prev_node = node
      node = node.nextNode
    end
  end

  class Node
    attr_accessor :value, :nextNode

    def initialize(value, nextNode)
      self.value = value
      self.nextNode = nextNode
    end
  end
end

LinkedList.new
# ll.add(10)
# ll.add(20)
# puts ll.head.value
# puts ll.head.nextNode.value
# puts ll.find(10)
# puts ll.find(70)
# puts ll.find(20)

# ll.prepend(10)
# ll.prepend(20)

# puts ll.head.value
# puts ll.head.nextNode.value

# ll.add(10)
# ll.add(20)
# ll.add(30)
# # ll.remove(20)

# puts ll.head.value
# puts ll.head.nextNode.value
# puts ll.head.nextNode.nextNode.value
