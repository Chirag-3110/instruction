/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($email: String!) {
    getUser(email: $email) {
      email
      name
      isAdmin
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $email: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        email
        name
        isAdmin
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($orderID: String!) {
    getOrder(orderID: $orderID) {
      orderID
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $orderID: String
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrders(
      orderID: $orderID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        orderID
        description
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getOrderTask = /* GraphQL */ `
  query GetOrderTask($TaskID: String!) {
    getOrderTask(TaskID: $TaskID) {
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
export const listOrderTasks = /* GraphQL */ `
  query ListOrderTasks(
    $TaskID: String
    $filter: ModelOrderTaskFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrderTasks(
      TaskID: $TaskID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        TaskID
        NodeID
        NextNodeName
        TaskAssignedTo
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getWorkflow = /* GraphQL */ `
  query GetWorkflow($workflowName: String!) {
    getWorkflow(workflowName: $workflowName) {
      workflowName
      WorkFlowDescription
      SaveAsDraft
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listWorkflows = /* GraphQL */ `
  query ListWorkflows(
    $workflowName: String
    $filter: ModelWorkflowFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWorkflows(
      workflowName: $workflowName
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        workflowName
        WorkFlowDescription
        SaveAsDraft
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getWorkflowDefinition = /* GraphQL */ `
  query GetWorkflowDefinition($id: ID!) {
    getWorkflowDefinition(id: $id) {
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
export const listWorkflowDefinitions = /* GraphQL */ `
  query ListWorkflowDefinitions(
    $filter: ModelWorkflowDefinitionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkflowDefinitions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getUserNotifications = /* GraphQL */ `
  query GetUserNotifications($id: ID!) {
    getUserNotifications(id: $id) {
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
export const listUserNotifications = /* GraphQL */ `
  query ListUserNotifications(
    $filter: ModelUserNotificationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        NotificationStatus
        NotificationContent
        NotifyTime
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const nodeByNodeandWorkFlowName = /* GraphQL */ `
  query NodeByNodeandWorkFlowName(
    $NodeName: String!
    $WorkFlowName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelWorkflowDefinitionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nodeByNodeandWorkFlowName(
      NodeName: $NodeName
      WorkFlowName: $WorkFlowName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const userByNotifStatus = /* GraphQL */ `
  query UserByNotifStatus(
    $NotificationStatus: NotifStatusEnum!
    $sortDirection: ModelSortDirection
    $filter: ModelUserNotificationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByNotifStatus(
      NotificationStatus: $NotificationStatus
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        NotificationStatus
        NotificationContent
        NotifyTime
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
