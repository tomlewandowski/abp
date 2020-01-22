using System;
using Volo.Abp.Guids;

namespace Volo.Abp.Application.Cqrs
{
    public class CommandBase : ICommand
    {
        public Guid Id { get; }

        public CommandBase()
        {
            Id = SimpleGuidGenerator.Instance.Create();
        }

        protected CommandBase(Guid id)
        {
            Id = id;
        }
    }
}
