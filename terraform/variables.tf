variable "aws_region" {
  description = "The AWS region to deploy to"
  type        = string
  default     = "us-east-1"
}

variable "ami_id" {
  description = "Ubuntu 24.04 LTS AMI ID (Make sure this matches your region)"
  type        = string
  default     = "ami-080e1f13692107408" # Ubuntu 24.04 in us-east-1
}

variable "instance_type" {
  description = "EC2 Instance Type"
  type        = string
  default     = "t3.medium"
}

variable "key_name" {
  description = "The name of the AWS key pair"
  type        = string
}