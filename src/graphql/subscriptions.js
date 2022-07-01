/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      email
      name
      isAdmin
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      email
      name
      isAdmin
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      email
      name
      isAdmin
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($owner: String) {
    onCreateOrder(owner: $owner) {
      orderID
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($owner: String) {
    onUpdateOrder(owner: $owner) {
      orderID
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($owner: String) {
    onDeleteOrder(owner: $owner) {
      orderID
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateOrderTask = /* GraphQL */ `
  subscription OnCreateOrderTask($owner: String) {
    onCreateOrderTask(owner: $owner) {
      TaskID
      NodeID
      NextNodeName
      TaskAssignedTo
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateOrderTask = /* GraphQL */ `
  subscription OnUpdateOrderTask($owner: String) {
    onUpdateOrderTask(owner: $owner) {
      TaskID
      NodeID
      NextNodeName
      TaskAssignedTo
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteOrderTask = /* GraphQL */ `
  subscription OnDeleteOrderTask($owner: String) {
    onDeleteOrderTask(owner: $owner) {
      TaskID
      NodeID
      NextNodeName
      TaskAssignedTo
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateWorkflow = /* GraphQL */ `
  subscription OnCreateWorkflow($owner: String) {
    onCreateWorkflow(owner: $owner) {
      workflowName
      WorkFlowDescription
      SaveAsDraft
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateWorkflow = /* GraphQL */ `
  subscription OnUpdateWorkflow($owner: String) {
    onUpdateWorkflow(owner: $owner) {
      workflowName
      WorkFlowDescription
      SaveAsDraft
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteWorkflow = /* GraphQL */ `
  subscription OnDeleteWorkflow($owner: String) {
    onDeleteWorkflow(owner: $owner) {
      workflowName
      WorkFlowDescription
      SaveAsDraft
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateWorkflowDefinition = /* GraphQL */ `
  subscription OnCreateWorkflowDefinition($owner: String) {
    onCreateWorkflowDefinition(owner: $owner) {
      workflowdefinitionid
      NodeName
      NextNodeName
      Description
      isRootNode
      WorkFlowName
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateWorkflowDefinition = /* GraphQL */ `
  subscription OnUpdateWorkflowDefinition($owner: String) {
    onUpdateWorkflowDefinition(owner: $owner) {
      workflowdefinitionid
      NodeName
      NextNodeName
      Description
      isRootNode
      WorkFlowName
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteWorkflowDefinition = /* GraphQL */ `
  subscription OnDeleteWorkflowDefinition($owner: String) {
    onDeleteWorkflowDefinition(owner: $owner) {
      workflowdefinitionid
      NodeName
      NextNodeName
      Description
      isRootNode
      WorkFlowName
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateUserNotifications = /* GraphQL */ `
  subscription OnCreateUserNotifications($owner: String) {
    onCreateUserNotifications(owner: $owner) {
      NotificationStatus
      NotificationContent
      NotifyTime
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUserNotifications = /* GraphQL */ `
  subscription OnUpdateUserNotifications($owner: String) {
    onUpdateUserNotifications(owner: $owner) {
      NotificationStatus
      NotificationContent
      NotifyTime
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUserNotifications = /* GraphQL */ `
  subscription OnDeleteUserNotifications($owner: String) {
    onDeleteUserNotifications(owner: $owner) {
      NotificationStatus
      NotificationContent
      NotifyTime
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
