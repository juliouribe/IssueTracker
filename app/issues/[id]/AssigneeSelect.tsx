'use client';

import { Select } from '@radix-ui/themes'
import React from 'react'

const AssigneeSelect = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder='Assign to User' />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Item value='1'>Julio</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  )
}

export default AssigneeSelect
