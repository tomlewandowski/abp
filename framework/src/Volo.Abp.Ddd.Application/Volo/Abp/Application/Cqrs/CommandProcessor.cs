using System;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace Volo.Abp.Application.Cqrs
{
    public sealed class CommandProcessor : ICommandProcessor, ISingletonDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public CommandProcessor(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task Process(ICommand command)
        {
            if (command == null) throw new ArgumentNullException("command");

            var handlerType = typeof(ICommandHandler<>).MakeGenericType(command.GetType());
            dynamic handler = _serviceProvider.GetService(handlerType);

            await handler.Handle((dynamic)command);
        }

        public async Task<TResult> Process<TResult>(ICommand<TResult> command)
        {
            if (command == null) throw new ArgumentNullException("command");

            var handlerType = typeof(ICommandHandler<,>).MakeGenericType(command.GetType(), typeof(TResult));
            dynamic handler = _serviceProvider.GetService(handlerType);

            return await handler.Handle((dynamic)command);
        }
    }
}
