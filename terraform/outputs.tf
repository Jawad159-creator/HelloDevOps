output "instance_public_ip" {
  description = "The public IP address of the DevOps EC2 instance"
  value       = aws_instance.devops_server.public_ip
}

output "ssh_connection_string" {
  description = "Quick copy-paste command to SSH into your new server"
  value       = "ssh -i ${var.key_name}.pem ubuntu@${aws_instance.devops_server.public_ip}"
}