using System;

namespace Volo.Abp.Application.Cqrs
{
    public interface ICommand<out TResult>
    {
        Guid Id { get; }
    }

    public interface ICommand
    {
        Guid Id { get; }
    }
}
